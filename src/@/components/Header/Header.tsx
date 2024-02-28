import { event } from '@/lib/event';

export const Header = () => {
  return (
    <header className="event-header">
      <div className="event-header-logo-wrap">
        <div
          className="event-header-logo"
          style={{ backgroundImage: `url(${event.logo})` }}
        >
          <span className="sr-only">{event.title} Logo</span>
        </div>
      </div>
      <div className="event-header-wrap">
        <div className="event-header-info">
          <h1 className="event-header-title">{event.title}</h1>
          <p className="event-header-date">{event.date}</p>
          <p className="event-header-location">{event.location}</p>
        </div>
        <div className="event-header-action">
          <button className="btn btn-primary event-header-button">
            Edit Event
          </button>
        </div>
      </div>
    </header>
  );
};
