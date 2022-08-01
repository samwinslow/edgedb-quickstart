module default {
  global current_uid -> str;

  type Person {
    required property firebase_uid -> str;
    required property first_name -> str;
    required property last_name -> str;
    property full_name := .first_name ++ ' ' ++ .last_name;
    property phone_number -> str;
    access policy read_phone_number allow select using (
      .firebase_uid ?= global current_uid
    )
  }

  type Event {
    required property title -> str;
    property ticket_price -> int64;
    multi link guests -> Person;
    link host -> Person;
  }
}
