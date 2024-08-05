import WebApp from "@twa-dev/sdk";

const BASE_URL = "https://sandbox.sportcrm.club/hook/tgminiapp2";

export async function fetchPartnerData() {
  try {
    const params = new URLSearchParams();
    params.append("initData", WebApp.initData);

    const response = await fetch(`${BASE_URL}/start`, {
      method: "POST",
      body: params,
    });

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching partner data:", error);
    throw error;
  }
}
