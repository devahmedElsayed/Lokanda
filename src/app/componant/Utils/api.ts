export const getExplore = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`);
      const exploreData = await res.json();
      return exploreData;
    } catch (error) {
      console.log(error);
    }
  };
export const getLive = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`);
      const LiveData = await res.json();
      return LiveData;
    } catch (error) {
      console.log(error);
    }
  };
export const getSaerchResult = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
      const saerchResultData = await res.json();
      return saerchResultData;
    } catch (error) {
      console.log(error);
    }
  };