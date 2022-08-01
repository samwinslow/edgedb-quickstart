CREATE MIGRATION m1rlluovxoeshrljhz2aduexusrggiec35wnaxhbmfvlc6jr2cw4tq
    ONTO m1e2km5ddxjb6tefcrgute5h26dsj6swllkeph62deqgfmmws4topa
{
  CREATE GLOBAL default::current_uid -> std::str;
  ALTER TYPE default::Person {
      CREATE REQUIRED PROPERTY firebase_uid -> std::str {
          SET REQUIRED USING ('A9XRBaBSZkffMfY0nRbssPFSDMf1');
      };
      CREATE ACCESS POLICY read_phone_number
          ALLOW SELECT USING ((.firebase_uid ?= GLOBAL default::current_uid));
      CREATE PROPERTY phone_number -> std::str;
  };
};
