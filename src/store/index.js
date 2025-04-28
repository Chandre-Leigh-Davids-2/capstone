import { createStore } from "vuex";
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { useCookies } from "vue3-cookies";
import router from "@/router";
import Swal from "sweetalert2";

const { cookies } = useCookies();

const apiURL = "https://c-b-vmhs.onrender.com/sanrio";

export default createStore({
  state: {
    users: null,
    user: null,
    products: [],
    product: null,
    sales: [],
    login: false,
    cart: JSON.parse(cookies.get("cart")) || [],
  },
  getters: {},
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setSingleUser(state, payload) {
      state.user = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    setSingleProduct(state, payload) {
      state.product = payload;
    },
    setSales(state,payload){
      state.sales = payload;
    },
    addToCart(state, item) {
      state.cart.push(item);
    },
    removeFromCart(state, itemId) {
      state.cart = state.cart.filter((item) => item.id !== itemId);
    },
    setLogin(state, data) {
      state.login = data;
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const { data } = await axios.get(`${apiURL}/getUsers`);
        commit("setUsers", data);
        toast.success("Users fetched successfully");
      } catch (error) {
        toast.error("Error fetching users");
      }
    },
    async fetchSingleUser({ commit }, id) {
      try {
        const { data } = await axios.get(`${apiURL}/getUser/${id}`);
        commit("setSingleUser", data);
      } catch (error) {
        toast.error("Error fetching user");
      }
    },
    async addUser({ commit }, info) {
      try {
        await axios.post(`${apiURL}/insertUser`, info);
        toast.success("User added successfully");
      } catch (error) {
        toast.error("Error adding user");
      }
    },
    async deleteUser({ dispatch }, id) {
      try {
        await axios.delete(`${apiURL}/deleteUser/${id}`);
        dispatch("fetchUsers");
        Swal.fire("Success", "User deleted successfully", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to delete user", "error");
      }
    },
    async loginUser({ commit }, currentUser) {
      try {
        const { data } = await axios.post(`${apiURL}/login`, currentUser);
        if (data.user) {
          cookies.set("userInfo", data);
          commit("setSingleUser", data.user);
          commit("setLogin", true);
          Swal.fire("Success", "Login successful", "success");
          router.push("/");
        } else {
          Swal.fire("Error", "Login failed", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Login failed", "error");
      }
    },
    logout() {
      cookies.remove("userInfo");
      Swal.fire("Logged Out", "You have been logged out", "info");
    },
    toCart({ commit }, item) {
      commit("addToCart", item);
      cookies.set("cart", JSON.stringify(this.state.cart));
      toast.success("Item added to cart");
    },
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get(`${apiURL}/getProducts`);
        if (response && response.data) {
          commit("setProducts", response.data);
          toast.success("Products fetched successfully");
        } else {
          toast.error("No products found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products");
      }
    },
    async fetchProduct(context, id) {
      try {
        const result= await (await axios.get(`${apiURL}/getProduct/${id}`)).data
        console.log(result);
        if (result) {
          context.commit('setSingleProduct', result)
        } else {
          toast.error(`${message}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })

        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchSales({ commit }) {
      try {
        const response = await axios.get(`${apiURL}/getSales`);
        if (response && response.data) {
          commit("setSales", response.data);
          toast.success("Products fetched successfully");
        } else {
          toast.error("No products in sale found");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        toast.error("Error fetching products");
      }
    },
    async addProduct({ dispatch }, product) {
      try {
        await axios.post(`${apiURL}/addProduct`, product);
        dispatch("fetchProducts");
        toast.success("Product added successfully");
      } catch (error) {
        toast.error("Error adding product");
      }
    },
    async updateProduct({ dispatch }, { id, updatedProduct }) {
      try {
        await axios.put(`${apiURL}/updateProduct/${id}`, updatedProduct);
        dispatch("fetchProducts");
        toast.success("Product updated successfully");
      } catch (error) {
        toast.error("Error updating product");
      }
    },
    async deleteProduct({ dispatch }, id) {
      try {
        await axios.delete(`${apiURL}/removeProduct/${id}`);
        dispatch("fetchProducts");
        Swal.fire("Success", "Product deleted successfully", "success");
      } catch (error) {
        Swal.fire("Error", "Failed to delete product", "error");
      }
    },
  },
  modules: {},
});
