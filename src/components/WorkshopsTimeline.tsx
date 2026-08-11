import React from 'react';
import { TIMELINE_EVENTS, WorkshopEvent } from '../data/ogedData';
import { Calendar, MapPin, Users, Award } from 'lucide-react';

interface WorkshopsTimelineProps {
  limit?: number;
}

export const WorkshopsTimeline: React.FC<WorkshopsTimelineProps> = ({ limit }) => {
  const events = limit ? TIMELINE_EVENTS.slice(0, limit) : TIMELINE_EVENTS;

  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-background">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4 text-sm font-semibold">
            <Award size={16} />
            Etkinlikler & Faaliyetler
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
            Katıldığımız Çalıştaylar ve Toplantılar
          </h2>
          <p className="text-base text-on-surface-variant leading-relaxed">
            Dernek olarak sektördeki yenilikleri takip etmek, çözümler üretmek ve iş birliği sağlamak amacıyla düzenlediğimiz ve katıldığımız etkinlikler.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-32 pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
          {events.map((event: WorkshopEvent) => (
            <div key={event.id} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-primary border-4 border-surface shadow-md group-hover:scale-125 transition-transform" />

              {/* Year Badge (Desktop Left Offset) */}
              <div className="hidden md:block absolute -left-36 top-1 text-sm font-bold text-primary/80 bg-surface-container-low px-3 py-1 rounded-full border border-outline-variant/30 shadow-xs">
                {event.year}
              </div>

              {/* Event Card */}
              <div className="bg-surface p-6 rounded-2xl border border-outline-variant/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary-container text-on-secondary-container">
                    {event.category}
                  </span>
                  <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} /> {event.location}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-primary mb-3">
                  {event.title}
                </h3>

                <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                  {event.description}
                </p>

                {event.participantsCount && (
                  <div className="flex items-center gap-2 text-xs font-semibold text-secondary pt-3 border-t border-outline-variant/20">
                    <Users size={16} />
                    <span>{event.participantsCount}+ Katılımcı ile gerçekleştirildi</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
