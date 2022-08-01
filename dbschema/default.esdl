module default {
  type Person {
    required property first_name -> str;
    required property last_name -> str;
    property full_name := .first_name ++ ' ' ++ .last_name;
  }

  type Event {
    required property title -> str;
    property ticket_price -> int64;
    multi link guests -> Person;
    link host -> Person;
  }
}
