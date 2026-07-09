import { describe, it, expect } from "vitest"
import { getAllPosts, getPostById } from "../content-adapter"

describe("content-adapter", () => {
  describe("getAllPosts", () => {
    it("returns all posts", () => {
      const posts = getAllPosts()
      expect(posts).toHaveLength(4)
    })

    it("each post has required fields", () => {
      const posts = getAllPosts()
      for (const post of posts) {
        expect(post).toHaveProperty("id")
        expect(post).toHaveProperty("title")
        expect(post).toHaveProperty("excerpt")
        expect(post).toHaveProperty("category")
        expect(post).toHaveProperty("date")
        expect(post).toHaveProperty("readTime")
      }
    })

    it("posts are ordered by id", () => {
      const posts = getAllPosts()
      for (let i = 1; i < posts.length; i++) {
        expect(posts[i].id).toBeGreaterThan(posts[i - 1].id)
      }
    })
  })

  describe("getPostById", () => {
    it("returns a post by id", () => {
      const post = getPostById(1)
      expect(post).toBeDefined()
      expect(post!.id).toBe(1)
      expect(post!.title).toBe("Mastering Git Workflows for Team Collaboration")
    })

    it("returns undefined for non-existent id", () => {
      const post = getPostById(99)
      expect(post).toBeUndefined()
    })
  })
})
