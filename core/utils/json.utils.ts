export const isJsonParseAble = (data: any) => {
    try {
      if (JSON.parse(data)) {
        return true;
      }
    } catch {
      return false;
    }
  };
  
  export const stringifyJson = (data: any) => {
    try {
      if (JSON.stringify(data)) {
        return JSON.stringify(data).replace(new RegExp('"', "g"), "");
      }
    } catch {
      return data;
    }
  };