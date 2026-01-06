# BookBridge Tech

個人ポートフォリオサイト。TanStack Start と Cloudflare Workers で構築されています。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| **フレームワーク** | [TanStack Start](https://tanstack.com/start) (React 19) |
| **スタイリング** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **コンテンツ管理** | [Content Collections](https://www.content-collections.dev/) |
| **コード品質** | [Biome](https://biomejs.dev/) |
| **テスト** | [Vitest](https://vitest.dev/) |
| **ホスティング** | [Cloudflare Workers](https://workers.cloudflare.com/) |
| **CI/CD** | GitHub Actions |

## ディレクトリ構成

```
bookbridge-tech/
├── contents/                    # Markdown コンテンツ
│   ├── posts/                   # ブログ記事
│   ├── profile/                 # プロフィールデータ
│   └── study/                   # 読書リスト
├── public/                      # 静的ファイル
│   ├── icons/                   # SNS アイコン
│   └── profile/                 # プロフィール画像
├── src/
│   ├── components/              # React コンポーネント
│   │   ├── common/              # 共通コンポーネント (Header, NotFound)
│   │   ├── home/                # ホームページ用
│   │   ├── posts/               # ブログ用
│   │   ├── profile/             # プロフィール用
│   │   └── study/               # 読書リスト用
│   ├── routes/                  # ページルート (ファイルベースルーティング)
│   └── styles.css               # グローバルスタイル
├── content-collections.ts       # コンテンツスキーマ定義
├── wrangler.jsonc               # Cloudflare Workers 設定
└── vite.config.ts               # Vite 設定
```

## 開発

### 必要条件

- Node.js 20+
- pnpm 9+

### セットアップ

```bash
# 依存関係のインストール
pnpm install

# 開発サーバー起動 (http://localhost:3000)
pnpm dev
```

### コマンド

| コマンド | 説明 |
|---------|------|
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | プロダクションビルド |
| `pnpm deploy` | ビルド & Cloudflare Workers へデプロイ |
| `pnpm test` | テスト実行 |

## Content Collections

Markdown ファイルから型安全なデータを生成します。

### コレクション

| コレクション | ディレクトリ | 用途 |
|-------------|-------------|------|
| `posts` | `contents/posts/` | ブログ記事 |
| `profile` | `contents/profile/` | プロフィール情報 |
| `books` | `contents/study/` | 読書リスト |

### 使用例

```tsx
import { allPosts, allProfiles, allBooks } from "content-collections";

// 型安全にアクセス可能
const profile = allProfiles[0];
console.log(profile.name); // string
console.log(profile.skills); // Array<{ name: string; years: string; level: number }>
```

### スキーマ

スキーマは `content-collections.ts` で Zod を使用して定義されています。

## デプロイ

### 自動デプロイ

`main` ブランチへの push で GitHub Actions が自動デプロイを実行します。

### 必要な Secrets

| Secret | 説明 |
|--------|------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API トークン |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare アカウント ID |

### 手動デプロイ

```bash
pnpm deploy
```

## ライセンス

MIT
