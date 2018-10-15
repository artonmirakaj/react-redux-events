import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSidebar from './EventDetailedSidebar';

// ownProps - router properties are attached to the component as its own properties
// and not something were getting from store
const mapState = (state, ownProps) => {
  // get event id, store eventID
  const eventId = ownProps.match.params.id;

  // better to have empty event, than no event at all
  // incase we browse to the wring place and get an error
  // empty event wont display nothing, but wont throw an error
  let event = {};

  // check to see if we have an event id and if events in our store
  if (eventId && state.events.length > 0) {
    // get event that matches id
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar attendees={event.attendees} />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapState)(EventDetailedPage);
