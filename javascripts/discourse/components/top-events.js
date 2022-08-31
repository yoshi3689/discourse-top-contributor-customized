import Component from "@ember/component";

export default Component.extend({
  tagName: "",

  init() {
    this._super(...arguments);
    // using Discourse API to fetch events(topics) in the event category
    const eventRoute = this.site.categories.find(category => category.slug.includes("event"));
    const eventRouteString = eventRoute ?  "/c/" + eventRoute.slug + "/" + eventRoute.id : this.siteSettings.event_route;
    fetch(`${eventRouteString}.json`)
      .then((response) => response.json())
      // filter out objects without an event object or date expired
      .then(data => data.topic_list.topics.filter(topic => topic.event && new Date(topic.event.start) > new Date()))
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