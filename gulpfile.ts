import { series, src, dest } from 'gulp'
import path from 'path'
import { run, withTaskName } from './utils'
import { projectRoot, outDir } from './utils/path'
import gulpTs from 'gulp-typescript'

export default series(
  withTaskName('clean', async () => run('pnpm run clean')),
  withTaskName('build', async () => {
    const tsConfig = path.resolve(projectRoot, 'tsconfig.json')
    const inputs = path.resolve(projectRoot, 'src/index.ts')
    return src(inputs)
      .pipe(gulpTs.createProject(tsConfig, {
        declaration: true, // 需要生成 ts 声明文件
        strict: false,
        module: 'esNext'
      })())
      .pipe(dest(outDir))
  })
)