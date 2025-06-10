
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Trash2, Plus } from 'lucide-react';

interface MassSchedule {
  id: string;
  day_of_week: string;
  time: string;
  type: string;
  language: string;
  is_active: boolean;
}

const MassScheduleManager = () => {
  const [schedules, setSchedules] = useState<MassSchedule[]>([]);
  const [editingSchedule, setEditingSchedule] = useState<MassSchedule | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    fetchSchedules();
  }, []);

  const fetchSchedules = async () => {
    const { data, error } = await supabase
      .from('mass_schedules')
      .select('*')
      .order('day_of_week');
    
    if (data) {
      setSchedules(data);
    }
  };

  const handleSave = async (schedule: MassSchedule) => {
    setIsLoading(true);
    const { error } = await supabase
      .from('mass_schedules')
      .upsert({
        ...schedule,
        updated_at: new Date().toISOString(),
      });

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Mass schedule updated successfully!",
      });
      setEditingSchedule(null);
      fetchSchedules();
    }
    setIsLoading(false);
  };

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('mass_schedules')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Mass schedule deleted successfully!",
      });
      fetchSchedules();
    }
  };

  const createNew = () => {
    setEditingSchedule({
      id: '',
      day_of_week: '',
      time: '',
      type: 'Regular Mass',
      language: 'English',
      is_active: true,
    });
  };

  return (
    <div className="space-y-4">
      <Button onClick={createNew} className="mb-4">
        <Plus className="w-4 h-4 mr-2" />
        Add New Schedule
      </Button>

      {editingSchedule && (
        <Card>
          <CardHeader>
            <CardTitle>{editingSchedule.id ? 'Edit' : 'Add'} Mass Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Day of Week</Label>
              <Input
                value={editingSchedule.day_of_week}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, day_of_week: e.target.value })}
                placeholder="e.g., Sunday, Monday"
              />
            </div>
            <div>
              <Label>Time</Label>
              <Input
                value={editingSchedule.time}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, time: e.target.value })}
                placeholder="e.g., 9:00 AM"
              />
            </div>
            <div>
              <Label>Type</Label>
              <Input
                value={editingSchedule.type}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, type: e.target.value })}
                placeholder="e.g., Regular Mass, Family Mass"
              />
            </div>
            <div>
              <Label>Language</Label>
              <Input
                value={editingSchedule.language}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, language: e.target.value })}
                placeholder="e.g., English, Latin"
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={() => handleSave(editingSchedule)} disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save'}
              </Button>
              <Button variant="outline" onClick={() => setEditingSchedule(null)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-4">
        {schedules.map((schedule) => (
          <Card key={schedule.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{schedule.day_of_week} - {schedule.time}</h4>
                  <p className="text-sm text-gray-600">{schedule.type} ({schedule.language})</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingSchedule(schedule)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(schedule.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MassScheduleManager;
