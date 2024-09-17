import {
  DynamicPage,
  DynamicPageTitle,
  List,
  ListItemStandard,
  ShellBar,
  Title,
} from "@ui5/webcomponents-react";
import { useState } from "react";
import "./App.css";
export default function App() {
  const [recipes] = useState([]);

  return (
    <div className="app-root">
      <ShellBar
        logo={
          <img
            alt="SAP Logo"
            src="https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg"
          />
        }
        primaryTitle="Interview App"
        showProductSwitch
      />
      <DynamicPage
        titleArea={<DynamicPageTitle heading={<Title>Recipes</Title>} />}
      >
        <List
          loading={recipes.length === 0}
          loadingDelay={100}
          noDataText="No recipes yet"
        >
          {recipes.map((recipe: any) => (
            <ListItemStandard
              key={recipe.id}
              additionalText={recipe.difficulty}
              type="Navigation"
            >
              {recipe.name}
            </ListItemStandard>
          ))}
        </List>
      </DynamicPage>
    </div>
  );
}
