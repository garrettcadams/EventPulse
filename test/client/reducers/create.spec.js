import { expect } from 'chai';

import reducer from '../../../client/reducers/reducer_create';

describe('create Reducer', () => {

  it('should handle CLEAR_FORM_VALUES', () => {
    const initialState = {
      title: 'moreThanTenWords',
      description: 'description',
      location: '751 street',
      hour: 4,
      minute: 40,
      ampm: 'am',
      duration_hour: 0,
      duration_minute: 0,
      category: 'other',
      privacy: 'false',
      group_visibility: 1,
      max_guests: 0,
      is_tomorrow: false
    };
    const action = {
      type: 'CLEAR_FORM_VALUES'
    }
    const nextState = reducer(initialState, action);
    const today = new Date();
    let currHour = today.getHours();
    let currMinute = today.getMinutes();
    expect(nextState).to.deep.equal(
        {
          eventFormData: {
            title: '',
            description: '',
            location: '',
            hour: currHour > 12 ? currHour - 12: currHour,
            minute: currMinute,
            ampm: currHour > 12 ? 'pm': 'am',
            duration_hour: 0,
            duration_minute: 0,
            category: 'other',
            privacy: 'false',
            group_visibility: 1,
            max_guests: 0,
            is_tomorrow: false
          },
          validationErrors: {}
        }
      );
  });

  it('should have an initial state', () => {
    const action = {
      type: 'TEST',
    }
    const nextState = reducer(undefined, action);
    const today = new Date();
    let currHour = today.getHours();
    let currMinute = today.getMinutes();
    expect(nextState).to.deep.equal(
        {
          eventFormData: {
            title: '',
            description: '',
            location: '',
            hour: currHour > 12 ? currHour - 12: currHour,
            minute: currMinute,
            ampm: currHour > 12 ? 'pm': 'am',
            duration_hour: 0,
            duration_minute: 0,
            category: 'other',
            privacy: 'false',
            group_visibility: 1,
            max_guests: 0,
            is_tomorrow: false
          },
          validationErrors: {}
        }
      );
  });
});