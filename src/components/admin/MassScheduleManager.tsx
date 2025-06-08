
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
  display_order: number;
  is_active: boolean;
}

const MassScheduleManager = () => {
  const [schedules, setSchedules] = useState<MassSchedule[]>([]);
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

  const addNewSchedule = () => {
    const newSchedule: MassSchedule = {
      id: '',
      day_type: '',
      times: [''],
      special_note: '',
      display_order: schedules.length + 1,
      is_active: true,
    };
    setSchedules([...schedules, newSchedule]);
  };

  const updateSchedule = (index: number, field: keyof MassSchedule, value: any) => {
    const updated = [...schedules];
    updated[index] = { ...updated[index], [field]: value };
    setSchedules(updated);
  };

  const updateTime = (scheduleIndex: number, timeIndex: number, value: string) => {
    const updated = [...schedules];
    updated[scheduleIndex].times[timeIndex] = value;
    setSchedules(updated);
  };

  const addTime = (scheduleIndex: number) => {
    const updated = [...schedules];
    updated[scheduleIndex].times.push('');
    setSchedules(updated);
  };

  const removeTime = (scheduleIndex: number, timeIndex: number) => {
    const updated = [...schedules];
    updated[scheduleIndex].times.splice(timeIndex, 1);
    setSchedules(updated);
  };

  return (
    <div className="space-y-4">
      <Button onClick={addNewSchedule} className="mb-4">
        <Plus className="w-4 h-4 mr-2" />
        Add New Schedule
      </Button>

      {schedules.map((schedule, index) => (
        <Card key={schedule.id || index}>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Mass Schedule {index + 1}</span>
              {schedule.id && (
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(schedule.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Day Type</Label>
              <Input
                value={schedule.day_type}
                onChange={(e) => updateSchedule(index, 'day_type', e.target.value)}
                placeholder="e.g., Sunday, Monday-Friday"
              />
            </div>
            
            <div>
              <Label>Times</Label>
              {schedule.times.map((time, timeIndex) => (
                <div key={timeIndex} className="flex gap-2 mb-2">
                  <Input
                    value={time}
                    onChange={(e) => updateTime(index, timeIndex, e.target.value)}
                    placeholder="e.g., 9:00 AM"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeTime(index, timeIndex)}
                    disabled={schedule.times.length === 1}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => addTime(index)}
              >
                Add Time
              </Button>
            </div>

            <div>
              <Label>Special Note (Optional)</Label>
              <Input
                value={schedule.special_note || ''}
                onChange={(e) => updateSchedule(index, 'special_note', e.target.value)}
                placeholder="e.g., Special holiday schedule"
              />
            </div>

            <Button onClick={() => handleSave(schedule)} disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save Schedule'}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MassScheduleManager;
