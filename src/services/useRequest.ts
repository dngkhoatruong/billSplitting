import axios from "axios";
import { useEffect, useState } from "react";

export function useGet (url: string, params?: {}) {
   const [data, setData] = useState<any>();
   const [error, setError] = useState<any>();
   const [loading, setLoading] = useState<boolean>(false);

   (async () => {
      try {
         const response = await axios.get(url, params);
         setData(response.data);
      } catch (err) {
         setError(err.message);
      } finally {
         setLoading(true);
      }
   })();

   return { data, error, loading};
};

export function usePost (url: string, params?: {}) {
   const [data, setData] = useState<any>();
   const [error, setError] = useState<any>();
   const [loading, setLoading] = useState<boolean>(false);

   useEffect(() => {
      (async () => {
         try {
            const response = await axios.post(url, method, params);
            setData(response.data);
         } catch (err) {
            setError(err.message);
         } finally {
            setLoading(true);
         }
      })();
   }, []);

   return { data, error, loading};
};

