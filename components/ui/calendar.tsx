import React from 'react';
import { cn } from '@/lib/utils';

export interface CalendarProps {
  mode?: 'single';
  selected?: Date;
  onSelect?: (date: Date | undefined) => void;
  className?: string;
}

export function Calendar({ selected, onSelect, className }: CalendarProps) {
  const today = new Date();
  const currentMonth = selected || today;
  const [displayMonth, setDisplayMonth] = React.useState(currentMonth);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isSameDay = (date1: Date | undefined, date2: Date) => {
    if (!date1) return false;
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const handleDateClick = (day: number) => {
    const newDate = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), day);
    onSelect?.(newDate);
  };

  const prevMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDisplayMonth(new Date(displayMonth.getFullYear(), displayMonth.getMonth() + 1, 1));
  };

  const days = daysInMonth(displayMonth);
  const firstDay = firstDayOfMonth(displayMonth);
  const daysArray = Array.from({ length: days }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className={cn('rounded-md border p-3 bg-white', className)}>
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="p-1 hover:bg-slate-100 rounded text-slate-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="font-semibold text-slate-900">
          {monthNames[displayMonth.getMonth()]} {displayMonth.getFullYear()}
        </div>
        <button
          type="button"
          onClick={nextMonth}
          className="p-1 hover:bg-slate-100 rounded text-slate-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-sm font-medium text-slate-600 p-2">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDay }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2" />
        ))}
        {daysArray.map((day) => {
          const date = new Date(displayMonth.getFullYear(), displayMonth.getMonth(), day);
          const isSelected = isSameDay(selected, date);
          const isToday = isSameDay(today, date);
          return (
            <button
              key={day}
              type="button"
              onClick={() => handleDateClick(day)}
              className={cn(
                'p-2 text-sm rounded text-slate-900 hover:bg-slate-100',
                isSelected && 'bg-teal-600 text-white hover:bg-teal-700',
                isToday && !isSelected && 'bg-slate-100 font-semibold text-slate-900'
              )}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

