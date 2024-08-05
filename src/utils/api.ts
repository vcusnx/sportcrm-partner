import WebApp from "@twa-dev/sdk";

const BASE_URL = "https://sandbox.sportcrm.club/hook/tgminiapp2";

export async function fetchPartnerData() {
  try {
    const response = await fetch(`${BASE_URL}/start`, {
      method: "POST",
      body: WebApp.initData.toString(),
    });

    const data = await response.json();

    console.log(JSON.stringify(data));

    return data;
  } catch (error) {
    console.error("Error fetching partner data:", error);
    throw error;
  }
}
