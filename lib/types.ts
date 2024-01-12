export type DailyScheduleResponse = {
  date: string;
  league: {
    id: string;
    name: string;
    alias: string;
  };
  games: {
    id: string;
    status: string;
    coverage: string;
    scheduled: string;
    home_points: number;
    away_points: number;
    track_on_court: boolean;
    sr_id: string;
    reference: string;
    time_zones: {
      venue: string;
      home: string;
      away: string;
    };
    venue: {
      id: string;
      name: string;
      capacity: number;
      address: string;
      city: string;
      state: string;
      zip: string;
      country: string;
      sr_id: string;
      location: {
        lat: string;
        lng: string;
      };
    };
    broadcasts: {
      network: string;
      type: string;
      locale: string;
      channel: string;
    }[];
    home: {
      name: string;
      alias: string;
      id: string;
      sr_id: string;
      reference: string;
    };
    away: {
      name: string;
      alias: string;
      id: string;
      sr_id: string;
      reference: string;
    };
  }[];
}
