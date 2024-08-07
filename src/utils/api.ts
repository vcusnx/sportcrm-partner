import WebApp from "@twa-dev/sdk";

export async function fetchPartnerData() {
  try {
    const params = new URLSearchParams();
    params.append("initData", WebApp.initData);

    if (WebApp.initData.length > 1) {
      const response = await fetch(
        `https://sandbox.sportcrm.club/hook/tgminiapp3/start`,
        {
          method: "POST",
          body: params,
        }
      );

      const data = await response.json();

      console.log(data);

      return data;
    } else {
      return "Empty init data";
    }
  } catch (error) {
    console.error("Ошибка при получении данных партнера:", error);
    throw error;
  }
}
