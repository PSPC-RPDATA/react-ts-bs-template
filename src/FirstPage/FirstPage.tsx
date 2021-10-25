import Page from "components/Page";

import Button from "./Button";
import Modal from "./Modal";
import { FirstPageStateProvider } from "./state";

/*

This page demos a good pattern to manage state for a complex sub-application. 

*/

export default function FirstPage() {
  return (
    <Page>
      <FirstPageStateProvider>
        <p> {tdt("Hello")} </p>
        <Modal />
        <Button />
      </FirstPageStateProvider>
    </Page>
  );
}
