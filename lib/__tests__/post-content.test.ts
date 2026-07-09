import { describe, it, expect } from "vitest"
import { getPostWithContent } from "../post-content"

describe("post-content", () => {
  describe("getPostWithContent", () => {
    it("returns a post with markdown content for id 1", () => {
      const post = getPostWithContent(1)
      expect(post).toBeDefined()
      expect(post!.id).toBe(1)
      expect(post!.content).toContain("# Mastering Git and GitHub")
      expect(post!.content).toContain("## What is Git?")
    })

    it("returns empty content for posts without markdown", () => {
      const post = getPostWithContent(2)
      expect(post).toBeDefined()
      expect(post!.content).toBe("")
    })

    it("returns undefined for non-existent id", () => {
      const post = getPostWithContent(99)
      expect(post).toBeUndefined()
    })
  })
})
