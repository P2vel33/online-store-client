import { $authHost, $host } from ".";
import { jwtDecode } from "jwt-decode";
export const signup = async (email, password) => {
  const { data } = await $host.post("api/user/sign-up", { email, password, role: "ADMIN" });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const signin = async (email, password) => {
  const { data } = await $host.post("api/user/sign-in", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
export const check = async () => {
  const { data } = await $authHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};
