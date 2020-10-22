$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/DataBaseFeature.feature");
formatter.feature({
  "line": 1,
  "name": "Database SQL query feature",
  "description": "",
  "id": "database-sql-query-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7321716900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Execute all information from Actor Table",
  "description": "",
  "id": "database-sql-query-feature;execute-all-information-from-actor-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sqlQuery"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User connects to PostgreSQL",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User sends \"select * from public.actor\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should get all information from that table",
  "keyword": "Then "
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_connects_to_PostgreSQL()"
});
formatter.result({
  "duration": 8693818499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "select * from public.actor",
      "offset": 12
    }
  ],
  "location": "SqlQueryStepDefinition.user_sends(String)"
});
formatter.result({
  "duration": 306388500,
  "status": "passed"
});
formatter.match({
  "location": "SqlQueryStepDefinition.user_should_get_all_information_from_that_table()"
});
formatter.result({
  "duration": 61184901,
  "status": "passed"
});
formatter.after({
  "duration": 626905200,
  "status": "passed"
});
});