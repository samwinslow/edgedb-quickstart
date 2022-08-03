CREATE MIGRATION m1utqzohyu4meqtdkiaj6xwq4joinmcgkc4xwtr6gbyhwulb6qmvcq
    ONTO m1cn6shxs6a5mqe4cmyprhj3ydshbsfhulkyphfkfispeljaqq6ima
{
  ALTER TYPE default::Event {
      DROP ACCESS POLICY delete_event;
  };
};
