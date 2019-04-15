"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Profile",
    embedded: false
  },
  {
    name: "ContactInfo",
    embedded: false
  },
  {
    name: "Company",
    embedded: false
  },
  {
    name: "Address",
    embedded: false
  },
  {
    name: "Branch",
    embedded: false
  },
  {
    name: "Log",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  },
  {
    name: "Attribute",
    embedded: false
  },
  {
    name: "Category",
    embedded: false
  },
  {
    name: "SubCategory",
    embedded: false
  },
  {
    name: "Brand",
    embedded: false
  },
  {
    name: "QRCode",
    embedded: false
  },
  {
    name: "ProductSrp",
    embedded: false
  },
  {
    name: "PurchasePrice",
    embedded: false
  },
  {
    name: "Stock",
    embedded: false
  },
  {
    name: "Inventory",
    embedded: false
  },
  {
    name: "Transaction",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Delivery",
    embedded: false
  },
  {
    name: "Quote",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Position",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "BranchType",
    embedded: false
  },
  {
    name: "ProductType",
    embedded: false
  },
  {
    name: "TransactionType",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "DeliveryStatus",
    embedded: false
  },
  {
    name: "AttributeType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
