import { Provider } from "react-redux";

import { store } from "@/redux/store";
import { RootLayout } from "@/components/layouts";
import { Steps } from "./components/steps";

export default function App() {
  return (
    <Provider store={store}>
      <RootLayout>
        <Steps />
      </RootLayout>
    </Provider>
  );
}
