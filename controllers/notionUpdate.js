import axios from "axios";
import { Client } from "@notionhq/client";
import { NOTION_API_KEY, NOTION_DATABASE_ID } from "../env.js";

console.log("Notion Stuff", NOTION_API_KEY, NOTION_DATABASE_ID);
const notion = new Client({ auth: NOTION_API_KEY });

(async () => {
  const response = await notion.databases.query({
    database_id: NOTION_DATABASE_ID,
    filter: {
      property: "Formula",
      formula: {
        string: {
          equals: "Well Done",
        },
      },
    },
  });
  console.log(JSON.stringify(response));
  response.results[0].properties.Assignee.people[0]
    ? console.log(
        response.results[0].properties.Assignee.people[0].person.email,
      )
    : console.log("No Assignee");
  /**
   *  check status
   *  check duedate difference
   *
   *  OR
   *
   *  check status
   *  check formula
   *
   *  THEN
   *
   *  set the Send Notice property accordingly
   *  send email
   *  	using Notion OR
   *  	using app
   */

})();
