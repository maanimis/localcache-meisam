// testStorage.js
import LocalStorage from "./localStorage.js";
import InMemoryStorage from "./inMemoryStorage.js";

// Test LocalStorage
function testLocalStorage() {
  console.log("Testing LocalStorage...");

  const localStorage = new LocalStorage("storage"); // Directory './storage' will be created if it doesn't exist

  // Set items
  console.log("set (key1, key2, key3)");
  localStorage.setItem("key1", JSON.stringify({ aa: 123 }));
  localStorage.setItem("key2", "value2");
  localStorage.setItem("key3", "value3");

  // Get items
  const result1 = localStorage.getItem("key1", "key2", "key3");
  console.log("Get Items (key1, key2, key3):", result1); // Should print {"key1":"value1","key2":"value2"}

  // Remove an item
  localStorage.removeItem("key2");
  const result2 = localStorage.getItem("key1", "key2", "key3");
  console.log("Get Items after removing key2:", result2); // Should print {"key1":"value1","key2":null,"key3":"value3"}

  // Clear all items
  // localStorage.clear();
  // const result3 = localStorage.getItem("key1", "key2", "key3");
  // console.log("Get Items after clear:", result3); // Should print {"key1":null,"key2":null,"key3":null}
}

// Test InMemoryStorage
function testInMemoryStorage() {
  console.log("Testing InMemoryStorage...");

  const inMemoryStorage = new InMemoryStorage();

  // Set items
  inMemoryStorage.setItem("key1", "value1");
  inMemoryStorage.setItem("key2", "value2");
  inMemoryStorage.setItem("key3", "value3");

  // Get items
  const result1 = inMemoryStorage.getItem("key1", "key2");
  console.log("Get Items (key1, key2):", result1); // Should print {"key1":"value1","key2":"value2"}

  // Remove an item
  inMemoryStorage.removeItem("key2");
  const result2 = inMemoryStorage.getItem("key1", "key2", "key3");
  console.log("Get Items after removing key2:", result2); // Should print {"key1":"value1","key2":null,"key3":"value3"}

  // Get all items
  const allItems = inMemoryStorage.getAll();
  console.log("All Items:", allItems); // Should print { key1: 'value1', key3: 'value3' }

  // Clear all items
  inMemoryStorage.clear();
  const result3 = inMemoryStorage.getItem("key1", "key2", "key3");
  console.log("Get Items after clear:", result3); // Should print {"key1":null,"key2":null,"key3":null}
}

// Run the tests
testLocalStorage();
testInMemoryStorage();
