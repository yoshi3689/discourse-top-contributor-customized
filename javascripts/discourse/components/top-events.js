import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    // using Discourse API to fetch events(topics) in the event category
    fetch('/c/static/14.json')
      .then((response) => response.json())
      // filter out objects without an event object
      .then(data => data.topic_list.topics.filter(topic => topic.event))
      // create date strings to show on the page
      .then(events => events.map((event) => {
          let eventDate = new Date(event.event.start);
          return { url: `/t/${event.slug}/${event.id}`, date: eventDate, day: eventDate.getDate(), month: eventDate.toLocaleString('default', { month: 'long' }).slice(0, 3), year: eventDate.getYear() + 1900, title: event.title};
        }))
        // re-order events n cut the array to length 3
      .then(filteredEvents => {
        const reorderedEvents = filteredEvents.sort((a, b) => a.date - b.date).slice(0, 3);
        this.set("events", reorderedEvents);
      });

  },
});