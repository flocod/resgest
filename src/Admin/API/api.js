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
// const fetchData__file = async (method, headers, url) => {
//   console.log(method, headers, url);
//   try {
//     const response = await fetch(url, {
//       method: method,
//       headers: headers,
//       redirect: "follow",
//     });


//     // const data = await response.json();
//     console.log("data",response)

//     if (response) {
//       return response;
//     } else {
//       return 0;
//     }
//   } catch (error) {
//     console.log("Une erreur s'est produite lors de l'envoi des données.",error);
//     return 0;
//   }
// };


const downloadFile = async (filePath,type) => {
  try {
    const response = await fetch(`${endpoints.public.fileDownload}?path=${encodeURIComponent(filePath)}&type=${type}`);
    if (!response.ok) {
      throw new Error(`Erreur lors de la récupération du fichier: ${response.status} ${response.statusText}`);
    }

    console.log("url response",response.url);
    // Convertir la réponse en blob (données binaires)
    const blob = await response.blob();

    // Créer un lien temporaire pour télécharger le fichier
    const url = window.URL.createObjectURL(blob);
    // const link = document.createElement('a');
    // link.href = url;
    // link.download = filePath.split('/').pop(); // Nom de fichier extrait du chemin
    // document.body.appendChild(link);
    // link.click();


    // Nettoyer l'URL temporaire après le téléchargement
    // window.URL.revokeObjectURL(url);

    console.log("url",url)
    return url;
  } catch (error) {
    console.error('Une erreur s\'est produite lors du téléchargement du fichier:', error.message);
  }
};




const downloadAndCacheImage = async (filePath, imageName) => {
  try {
    const response = await fetch(`${endpoints.public.fileDownload}?path=${encodeURIComponent(filePath)}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const image = new Image();
    image.src = url;

    // Créer un canvas pour dessiner l'image et la garder en cache
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);

    // Convertir l'image en base64
    const base64Image = canvas.toDataURL('image/png');

    // Stocker l'image en cache
    localStorage.setItem(imageName, base64Image);

    console.log('Image téléchargée et mise en cache avec succès.');
  } catch (error) {
    console.error('Une erreur s\'est produite lors du téléchargement et de la mise en cache de l\'image:', error.message);
  }
};

// // Exemple d'utilisation





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

export const setMenuState = async (formData) => {
  return fetchData__no_Alert(
    "POST",
    {},
    endpoints.public.setMenuState,
    formData
  );
};

export const setCategoryState = async (formData) => {
  return fetchData__no_Alert(
    "POST",
    {},
    endpoints.public.setCategoryState,
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


export const createCategory = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.createCategory,
    formData
  );
};

export const createArticle = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.createArticle,
    formData
  );
};

export const updateArticle = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.updateArticle,
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
export const deleteCategory = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.deleteCategory,
    formData
  );
};

export const deleteArticle = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.deleteArticle,
    formData
  );
};

export const upadateCategory = async (formData) => {
  return fetchData(
    "POST",
    {},
    endpoints.public.upadateCategory,
    formData
  );
};

export const userEstablishment = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.userEstablishment+`?ESTABLISHMENT_ID=${ID}`
  );
};


export const getEstablishment = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.getEstablishment+`?ESTABLISHMENT_ID=${ID}`
  );
};


export const fileDownload = async (path,type) => {
  return downloadFile(
    path,type
  );
};


export const fn_downloadAndCacheImage = async (path,imageName) => {
  return downloadAndCacheImage(
    path,imageName
  );
};
// /api/download?path=${encodeURIComponent(filePath)}
// export const deleteCategory = async (ID) => {
//   return fetchData__no_Alert_no_body(
//     "GET",
//     {},
//     endpoints.public.deleteCategory+`?ID=${ID}`
//   );
// };


export const getAllCategory = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.getAllCategory+`?ESTABLISHMENT_ID=${ID}`
  );
};

export const getAllArticlesByEstablishment = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.getAllArticlesByEstablishment+`?ESTABLISHMENT_ID=${ID}`
  );
};

export const getCategoryByID = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.getCategoryByID+`?CATEGORY_ID=${ID}`
  );
};

export const getArticleById = async (ID) => {
  return fetchData__no_Alert_no_body(
    "GET",
    {},
    endpoints.public.getArticleById+`?ARTICLE_ID=${ID}`
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
