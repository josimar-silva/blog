"use strict";
/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostBySlug = getPostBySlug;
exports.getAllPosts = getAllPosts;
exports.getFeaturedPosts = getFeaturedPosts;
var promises_1 = require("fs/promises");
var matter = require("gray-matter");
var path_1 = require("path");
var postsDirectory = (0, path_1.join)(process.cwd(), "__posts");
function getPostBySlug(slug_1) {
    return __awaiter(this, arguments, void 0, function (slug, fields) {
        var realSlug, fullPath, fileContents, _a, data, content, items;
        if (fields === void 0) { fields = []; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    realSlug = slug.replace(/\.md$/, ""), fullPath = (0, path_1.join)(postsDirectory, "".concat(realSlug, ".md"));
                    return [4 /*yield*/, (0, promises_1.readFile)(fullPath, "utf8")];
                case 1:
                    fileContents = _b.sent(), _a = matter(fileContents), data = _a.data, content = _a.content;
                    items = {};
                    // Ensure only the minimal needed data is exposed
                    fields.forEach(function (field) {
                        if (field === "slug") {
                            items[field] = realSlug;
                        }
                        if (field === "content") {
                            items[field] = content;
                        }
                        if (typeof data[field] !== "undefined") {
                            items[field] = data[field];
                        }
                    });
                    return [2 /*return*/, items];
            }
        });
    });
}
function getAllPosts() {
    return __awaiter(this, arguments, void 0, function (fields) {
        var slugs, posts;
        var _this = this;
        if (fields === void 0) { fields = []; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, promises_1.readdir)(postsDirectory)];
                case 1:
                    slugs = _a.sent();
                    return [4 /*yield*/, Promise.all(slugs.map(function (slug) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getPostBySlug(slug, fields)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); }))];
                case 2:
                    posts = _a.sent();
                    return [2 /*return*/, posts.sort(function (post1, post2) { return (post1.date > post2.date ? -1 : 1); })];
            }
        });
    });
}
function getFeaturedPosts() {
    return __awaiter(this, arguments, void 0, function (fields) {
        if (fields === void 0) { fields = [
            "featured",
            "id",
            "slug",
            "title",
            "image",
            "readTime",
            "excerpt",
            "date",
            "category",
        ]; }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllPosts(fields)];
                case 1: return [2 /*return*/, (_a.sent()).filter(function (post) { return post.featured; })];
            }
        });
    });
}
