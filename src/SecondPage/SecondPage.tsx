import Page from "components/Page";

import colors from "./colors.module.scss";

import CustomComponent from "./CustomComponent";

/*

This page demos using a custom SASS style sheet

*/

export default function SecondPage() {
  return (
    <Page>
      <div>
        <div
          style={{
            backgroundColor: colors.activeColor,
            width: "100px",
            height: "100px",
          }}
        />
      </div>
      <div>
        <CustomComponent title="example1" body="lorem ipsum" />
      </div>
      <div>
        <CustomComponent title="example2" body="lorem ipsum 2" active />
      </div>
    </Page>
  );
}
