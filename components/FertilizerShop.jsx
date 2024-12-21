"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Minus,
  ShoppingCart,
  X,
  AlertCircle,
  Search,
  Leaf,
} from "lucide-react";

const products = [
  {
    id: 1,
    title: "Urea",
    description:
      "A nitrogen-rich fertilizer that promotes leafy growth, especially useful for crops like maize and cotton.",
    image: "/fertilizers/urea.jpg",
    price: 20,
  },
  {
    id: 2,
    title: "DAP (Di-Ammonium Phosphate)",
    description:
      "High in phosphorus, ideal for supporting root development in crops like sugarcane and paddy.",
    image: "/fertilizers/dap.jpg",
    price: 25,
  },
  {
    id: 3,
    title: "14-35-14",
    description:
      "Balanced fertilizer providing a high phosphorus boost, suitable for cotton and oil seeds.",
    image: "/fertilizers/14-35-14.jpg",
    price: 30,
  },
  {
    id: 4,
    title: "28-28",
    description:
      "A balanced fertilizer ideal for general crop growth, particularly for tobacco and maize.",
    image: "/fertilizers/28-28.jpg",
    price: 28,
  },
  {
    id: 5,
    title: "17-17-17",
    description:
      "Provides equal parts nitrogen, phosphorus, and potassium, suitable for a variety of crops including barley and wheat.",
    image: "/fertilizers/17-17-17.jpg",
    price: 32,
  },
  {
    id: 6,
    title: "20-20",
    description:
      "Balanced fertilizer for moderate nutrient requirements, suitable for pulses and sugarcane.",
    image: "/fertilizers/20-20-0.jpg",
    price: 27,
  },
  {
    id: 7,
    title: "10-26-26",
    description:
      "High in phosphorus and potassium, suitable for crops like tobacco and pulses needing extra nutrient support.",
    image: "/fertilizers/10-26-26.jpg",
    price: 35,
  },
];

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full flex flex-col">
        <CardHeader>
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <CardTitle>{product.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{product.description}</CardDescription>
          <p className="mt-2 font-bold">₹{product.price.toFixed(2)}</p>
        </CardContent>
        <CardFooter className="mt-auto">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <Button variant="outline" size="icon" onClick={decrementQuantity}>
                <Minus className="h-4 w-4" />
              </Button>
              <Input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 mx-2 text-center"
              />
              <Button variant="outline" size="icon" onClick={incrementQuantity}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button onClick={handleAddToCart}>
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </motion.div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const AlertMessage = ({ message }) => (
  <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4">
    <span className="block sm:inline">{message}</span>
  </div>
);

const Cart = ({ cartItems, removeFromCart, isOpen, setIsOpen }) => {
  const [rationId, setRationId] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = isVerified ? subtotal * 0.3 : 0;
  const total = subtotal - discount;

  const handleVerify = () => {
    if (rationId.trim() === "") {
      setAlertMessage("Please Enter Ration ID to verify!");
      return;
    }
    setIsVerified(true);
    setAlertMessage(
      "Ration ID verified successfully! A 30% discount has been applied."
    );
    setTimeout(() => setAlertMessage(""), 5000); // Hide alert after 5 seconds
  };

  const handleCheckout = () => {
    if (rationId.trim() === "") {
      alert("Please enter your ration ID before checking out.");
      return;
    }
    setAlertMessage(
      `Thank you for your order! Your ration ID: ${rationId}. Total: ₹${total.toFixed(
        2
      )}`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-full max-w-md p-6 overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Cart</h2>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            {alertMessage && <AlertMessage message={alertMessage} />}
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <>
                <AnimatePresence>
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      className="flex justify-between items-center mb-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </Button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="mt-4">
                  <p className="font-bold">Subtotal: ₹{subtotal.toFixed(2)}</p>
                  {isVerified && (
                    <p className="text-green-600">
                      Discount: -₹{discount.toFixed(2)}
                    </p>
                  )}
                  <p className="font-bold text-lg">Total: ₹{total.toFixed(2)}</p>
                  <div className="flex mt-2">
                    <Input
                      type="text"
                      placeholder="Enter your ration ID"
                      value={rationId}
                      onChange={(e) => setRationId(e.target.value)}
                      className="flex-grow"
                    />
                    <Button
                      onClick={handleVerify}
                      className="ml-2"
                      disabled={isVerified}
                    >
                      Verify
                    </Button>
                  </div>
                </div>
                <Button
                  onClick={handleCheckout}
                  className="mt-4 w-full bg-blue-500 text-white"
                >
                  Checkout
                </Button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// New PageHeader Component
const PageHeader = () => {
  return (
    <div className="text-center py-10 bg-gradient-to-r from-green-400 to-blue-500 text-white relative mb-4">
      {/* <Leaf className="absolute top-0 left-96 h-12 w-12 text-white opacity-70" /> */}
      <h1 className="text-5xl font-extrabold flex items-center justify-center">
        Fertilizer Shop
        <ShoppingCart className="ml-4 h-10 w-10" />
      </h1>
      <p className="text-lg mt-2">Find the best fertilizers for your crops and boost your yields!</p>
    </div>
  );
};

const ProductsList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Page Header */}
      <PageHeader />

      {/* Search Bar and Cart Button */}
      <div className="flex items-center w-[25%] mx-auto mb-4">
        <Input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mr-2"
        />
        <Button
          variant="default"
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="ml-2"
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Cart ({cartItems.length})
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Cart Component */}
      <Cart
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </div>
  );
};

export default ProductsList;
