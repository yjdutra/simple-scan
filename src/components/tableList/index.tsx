import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Table, Row } from "react-native-table-component";

import {Container, TableHeader, TableHeaderText} from './styles'

const TableList = ({ data }) => {
  const tableHead = ["Nome do Link", "Informações do Link"];
  const widthArr = [200, 200];

  return (
    <Container>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{ borderColor: "transparent" }}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={{ height: 50, backgroundColor: "#f7f6f6" }}
              textStyle={{ textAlign: "center", fontWeight: "bold" }}
            />
            {data.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={widthArr}
                style={[
                  { height: 40, backgroundColor: "#f2f2f2" },
                  index % 2 && { backgroundColor: "#f7f7f7" },
                ]}
                textStyle={{ textAlign: "center" }}
              />
            ))}
          </Table>
        </View>
      </ScrollView>
    </Container>
  );
};

export default TableList;
