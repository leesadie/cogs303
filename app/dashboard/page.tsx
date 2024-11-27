import ClientOnly from "../components/ClientOnly";
import DashboardClient from "./DashboardClient";
import getCurrentUser from "../actions/getCurrentUser";

export default async function DashboardPage () {
    const currentUser = await getCurrentUser();

    return (
        <ClientOnly>
            <DashboardClient currentUser={currentUser}/>
        </ClientOnly>
    );
}