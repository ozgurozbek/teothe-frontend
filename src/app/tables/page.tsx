"use client";

import { Button, Card, Divider, Empty, Skeleton, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import useSWR from "swr";
import { Table } from "antd";
import { useState } from "react";
import SimpleContent from "@/components/SimpleCon";
import Metadata from "@/components/Metadata";

/**
 * Function to fetch and display data for different tables.
 * @generator
 * @returns The table displaying information about the selected table.
 */
function GetTableData() {
  const [curTable, setCurTable] = useState("resurrection");
  const [displayEmpty, setDisplayEmpty] = useState(true);
  let query = curTable;

  function TablesNavigator() {
    return (
      <>
        <Space wrap>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("material");
            }}
          >
            Material Variants
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("alchemy");
            }}
          >
            Alchemy
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("resurrection");
            }}
          >
            Resurrection
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("enhancements");
            }}
          >
            Enhancements
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("runes");
            }}
          >
            Runes
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("adultry");
            }}
          >
            Adultry
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("cooking");
            }}
          >
            Cooking
          </Button>
          <Button
            onClick={() => {
              setDisplayEmpty(false);
              setCurTable("scroll");
            }}
          >
            Scrolls
          </Button>
        </Space>
      </>
    );
  }

  /**
   * Fetcher function for API requests.
   * @param args - RequestInfo object containing information about the request.
   * @returns Promise resolving to the parsed JSON response.
   */
  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getTables?tab=" +
      query,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  if (displayEmpty) {
    return (
      <>
        <TablesNavigator />
        <Divider />
        <Empty />
      </>
    );
  }

  function titleCase(text: string) {
    return text
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
  }

  //dataSource, columns
  let columns = [];
  for (let j = 0; j < data.tableDescription.columns.length; j++) {
    columns.push({
      title: titleCase(data.tableDescription.columns[j]),
      dataIndex: data.tableDescription.columns[j],
      key: data.tableDescription.columns[j],
    });
  }

  let dataSource = [];
  for (let rowData of data.tableData) {
    dataSource.push(rowData);
  }
  dataSource.sort((a, b) => parseInt(a.id) - parseInt(b.id));

  return (
    <>
      <TablesNavigator />
      <Divider />
      <SimpleContent
        contentProps={{
          title: titleCase(query),
          text: [data.tableDescription.description],
        }}
      />
      <Table
        className="mt-4"
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: 1200 }}
      />
    </>
  );
}

/**
 * Component for the tables page, displaying breadcrumbs and a card containing table data.
 * @returns The tables page section with breadcrumbs and table data.
 */
export default function TablesPage() {
  return (
    <>
      <Metadata
        title="Teothe - A 5E Campaign Setting | Tables"
        description="Enhance your gameplay with our collection of tables, from weapon enhancements to resurrection chances and expenses, optimizing your TTRPG experience."
      />
      <section>
        <GetCrumbs path={"Teothe,Tables"} />
        <Card bordered={false} className="w-full">
          {GetTableData()}
        </Card>
      </section>
    </>
  );
}
