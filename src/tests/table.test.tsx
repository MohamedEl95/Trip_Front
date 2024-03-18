import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Table from "../components/molecules/table";

test("Tablerenders headers and children correctly", () => {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const children = (
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
        <td>Data 3</td>
      </tr>
  );

  const { getByText } = render(
    <Table headers={headers}>{children}</Table>
  );

  headers.forEach((header) => {
    expect(getByText(header)).toBeInTheDocument();
  });

  expect(getByText("Data 1")).toBeInTheDocument();
  expect(getByText("Data 2")).toBeInTheDocument();
  expect(getByText("Data 3")).toBeInTheDocument();
});
