CREATE MIGRATION m1cn6shxs6a5mqe4cmyprhj3ydshbsfhulkyphfkfispeljaqq6ima
    ONTO m1rlluovxoeshrljhz2aduexusrggiec35wnaxhbmfvlc6jr2cw4tq
{
  ALTER TYPE default::Event {
      CREATE ACCESS POLICY delete_event
          ALLOW DELETE USING ((.host.firebase_uid ?= GLOBAL default::current_uid));
  };
  ALTER TYPE default::Person {
      DROP ACCESS POLICY read_phone_number;
  };
};
