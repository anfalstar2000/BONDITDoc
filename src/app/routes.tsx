import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import WelcomePage from "./pages/WelcomePage";
import WhyLoyaltyPage from "./pages/WhyLoyaltyPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ProgramTypesPage from "./pages/ProgramTypesPage";
import CustomerExperiencePage from "./pages/CustomerExperiencePage";
import PointsRewardsPage from "./pages/PointsRewardsPage";
import BadgesTiersPage from "./pages/BadgesTiersPage";
import ChallengesPage from "./pages/ChallengesPage";
import ReferralPage from "./pages/ReferralPage";
import MarketingMessagesPage from "./pages/MarketingMessagesPage";
import AIAssistantPage from "./pages/AIAssistantPage";
import CustomersPage from "./pages/CustomersPage";
import IntegrationsPage from "./pages/IntegrationsPage";
import SettingsPage from "./pages/SettingsPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
export const router = createBrowserRouter([
 {
 path: "/",
 Component: Layout,
 children: [
 { index: true, Component: WelcomePage },
 { path: "why-loyalty", Component: WhyLoyaltyPage },
 { path: "how-it-works", Component: HowItWorksPage },
 { path: "program-types", Component: ProgramTypesPage },
 { path: "customer-experience", Component: CustomerExperiencePage },
 { path: "points-rewards", Component: PointsRewardsPage },
 { path: "badges-tiers", Component: BadgesTiersPage },
 { path: "challenges", Component: ChallengesPage },
 { path: "referral", Component: ReferralPage },
 { path: "marketing-messages", Component: MarketingMessagesPage },
 { path: "ai-assistant", Component: AIAssistantPage },
 { path: "customers", Component: CustomersPage },
 { path: "integrations", Component: IntegrationsPage },
 { path: "settings", Component: SettingsPage },
 { path: "success-stories", Component: SuccessStoriesPage },
 ],
 },
]);
