
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
  day_type: string;
  times: string[];
  special_note?: string;
  is_active: boolean;
  display_order: number;
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
      .order('display_order');
    
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
      day_type: '',
      times: [''],
      special_note: '',
      is_active: true,
      display_order: schedules.length,
    });
  };

  const updateTimes = (index: number, value: string) => {
    if (!editingSchedule) return;
    const newTimes = [...editingSchedule.times];
    newTimes[index] = value;
    setEditingSchedule({ ...editingSchedule, times: newTimes });
  };

  const addTime = () => {
    if (!editingSchedule) return;
    setEditingSchedule({ ...editingSchedule, times: [...editingSchedule.times, ''] });
  };

  const removeTime = (index: number) => {
    if (!editingSchedule) return;
    const newTimes = editingSchedule.times.filter((_, i) => i !== index);
    setEditingSchedule({ ...editingSchedule, times: newTimes });
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
              <Label>Day Type</Label>
              <Input
                value={editingSchedule.day_type}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, day_type: e.target.value })}
                placeholder="e.g., Sunday, Weekdays, Saturday"
              />
            </div>
            <div>
              <Label>Times</Label>
              {editingSchedule.times.map((time, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <Input
                    value={time}
                    onChange={(e) => updateTimes(index, e.target.value)}
                    placeholder="e.g., 9:00 AM"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => removeTime(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addTime}>
                Add Time
              </Button>
            </div>
            <div>
              <Label>Special Note</Label>
              <Input
                value={editingSchedule.special_note || ''}
                onChange={(e) => setEditingSchedule({ ...editingSchedule, special_note: e.target.value })}
                placeholder="e.g., No mass on holidays"
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
                  <h4 className="font-semibold">{schedule.day_type}</h4>
                  <p className="text-sm text-gray-600">Times: {schedule.times.join(', ')}</p>
                  {schedule.special_note && (
                    <p className="text-sm text-gray-500 mt-1">{schedule.special_note}</p>
                  )}
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
