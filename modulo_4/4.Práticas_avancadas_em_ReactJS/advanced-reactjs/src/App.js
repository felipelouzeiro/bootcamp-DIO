import { Card } from "./Card";
import { ThemeContex } from "./Theme";
import { themes } from "./Theme";

function App() {

  return (
    <ThemeContex.Provider value={themes.primary}>
      <Card>teste</Card>
    </ThemeContex.Provider>
  );
}

export default App;
