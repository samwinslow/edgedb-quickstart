module default {
  type Person {
    required property first_name -> str;
    required property last_name -> str;
  }

  type Event {
    required property title -> str;
    property ticket_price -> int64;
    multi link guests -> Person;
    link host -> Person;
  }
}
