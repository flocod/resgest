import { endpoints } from "./EndPoints";
import Swal from "sweetalert2";

const requestOptions = {
  headers: {
    Authorization: localStorage.getItem("access-token"),
  },
};

// const fetchData = async (url, options) => {
//   const response = await fetch(url, options);
//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }
//   return response.json();
// };

const fetchData = async (method, headers, url, formData) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: formData,
      redirect: "follow",
    });

    const data = await response.json();
    console.log(data)

    if (data.reponse === 1) {
      Swal.fire({
        icon: "success",
        title: "Succès",
        text: `${data.message}`,
      });
      return data;
    } else {
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: `${data.message}`,
      });
    }
  } catch (error) {
    console.error(error);

    Swal.fire({
      icon: "error",
      title: "Erreur",
      text: "Une erreur s'est produite lors de l'envoi des données.",
    });

    return 0;
  }
};

const fetchData__no_Alert_no_body = async (method, headers, url) => {
  console.log(method, headers, url);
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      redirect: "follow",
    });

    const data = await response.json();
    console.log(data)

    if (data.reponse === 1) {
      return data;
    } else {
      console.log("Error", data.message);
    }
  } catch (error) {
    console.log("Une erreur s'est produite lors de l'envoi des données.",error);
    return 0;
  }
};

const fetchData__no_Alert = async (method, headers, url,formData) => {
  console.log(method, headers, url);
  try {
    const response = await fetch(url, {
      method: method,
      headers: headers,
      body: formData,
      redirect: "follow",
    });

    const data = await response.json();
    console.log(data)

    if (data.reponse === 1) {
      return data;
    } else {
      console.log("Error", data.message);
    }
  } catch (error) {
    console.log("Une erreur s'est produite lors de l'envoi des données.",error);
    return 0;
  }
};


export const setUserState = async (formData) => {
  return fetchData__no_Alert(
    "POST",
    {},
    endpoints.public.setUserState,
    formData
  );
};



// const setUserState = async (formData) => {
//   try {
//     const response = await fetch(endpoints.public.setUserState, {
//       method: "POST",
//       body: formData,
//     });
//     if (!response.ok) {
//       throw new Error("Failed to update user state");
//     }
//     return response.json();
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };


export const createEstablishmentUser = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.createEstablishmentUser,
    formData
  );
};

export const createUser = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.createUser,
    formData
  );
};
export const userEstablishment = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.userEstablishment+`?=${ID}`
  );
};

export const userLogin = async (formData) => {
  return fetchData("POST", {}, endpoints.public.userLogin, formData);
};

export const userDeconnection = async (formData,token) => {
  return fetchData(
    "POST",
    {Authorization: `Bearer ${token}`},
    endpoints.public.userDeconnection,
    formData
  );
};

// export const fetchProductList = async ({ pageParam = 1 }) => {
//   const url = `${BASE_URL}${endpoints.productList}?page=${pageParam}`;
//   return fetchData(url, requestOptions);
// };

// export const fetchProduct = async (id) => {
//   const url = `${BASE_URL}${endpoints.product(id)}`;
//   return fetchData(url, requestOptions);
// };

// export const postProduct = async (input) => {
//   const url = `${BASE_URL}${endpoints.productList}`;
//   const options = {
//     ...requestOptions,
//     method: "POST",
//     body: JSON.stringify(input),
//   };
//   return fetchData(url, options);
// };

// export const fetcRegister = async (input) => {
//   const url = `${BASE_URL}${endpoints.register}`;
//   const options = {
//     ...requestOptions,
//     method: "POST",
//     body: JSON.stringify(input),
//   };
//   return fetchData(url, options);
// };
