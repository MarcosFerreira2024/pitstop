"use client";
import { Car, getCarInfo } from "@/services/car";
import { useEffect, useState } from "react";

function useCar(id: string|null) {


  const [carInfo, setCarInfo] = useState<Car | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");


  useEffect(() => {

      if (typeof id !== "string") {
        setCarInfo(null);
        setLoading(false);
        setError("Nenhum id informado");
        return;
      }

    const fetchCar = async () => {
      const data = await getCarInfo(id);

      if (data instanceof Error) {
        setError(data.message);
        setLoading(false);
        return;
      }

      setCarInfo(data);

      setLoading(false);
      return; 
    };
    fetchCar();
  }, [carInfo, id]);

  return {
    carInfo,
    loading,
    error,
  };
}

export default useCar;
