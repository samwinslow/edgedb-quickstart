CREATE MIGRATION m1jffn6bhopn5ynr3sqtii6ckdknv3yrr3m3upd5hfqjxgr4aqcqsa
    ONTO initial
{
  CREATE TYPE default::Person {
      CREATE REQUIRED PROPERTY first_name -> std::str;
      CREATE REQUIRED PROPERTY last_name -> std::str;
  };
  CREATE TYPE default::Event {
      CREATE MULTI LINK guests -> default::Person;
      CREATE LINK host -> default::Person;
      CREATE PROPERTY ticket_price -> std::int64;
      CREATE REQUIRED PROPERTY title -> std::str;
  };
};
