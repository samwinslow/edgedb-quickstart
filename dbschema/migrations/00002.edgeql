CREATE MIGRATION m1e2km5ddxjb6tefcrgute5h26dsj6swllkeph62deqgfmmws4topa
    ONTO m1jffn6bhopn5ynr3sqtii6ckdknv3yrr3m3upd5hfqjxgr4aqcqsa
{
  ALTER TYPE default::Person {
      CREATE PROPERTY full_name := (((.first_name ++ ' ') ++ .last_name));
  };
};
