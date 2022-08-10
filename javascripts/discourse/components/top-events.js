import Component from "@ember/component";

// const months = [
//   "January","February","March","April","May","June",
//   "July","August","September","October","November","December",];

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    fetch('/c/static/14.json')
      .then((response) => response.json())
      .then(data => data.topic_list.topics.filter(topic => topic.event))
      .then(events => events.map((event) => {
          let eventDate = new Date(event.event.start);
          return { url: `/t/${event.slug}/${event.id}`, date: eventDate, day: eventDate.getDate(), month: eventDate.toLocaleString('default', { month: 'long' }).slice(0, 3), year: eventDate.getYear() + 1900, title: event.title};
        }))
      .then(filteredEvents => {
        const reorderedEvents = filteredEvents.sort((a, b) => a.date - b.date).slice(0, 3);
        this.set("events", reorderedEvents);
      });

  },
});