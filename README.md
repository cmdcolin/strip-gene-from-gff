# strip-gene-from-gff

Removes 'gene level' features from gff

## Usage

```
git clone https://github.com/cmdcolin/strip-gene-from-gff
cd strip-gene-from-gff
yarn
node index.js yourfile.gff > output.gff
jbrowse sort-gff output.gff > output.sorted.gff
bgzip output.sorted.gff
tabix output.sorted.gff.gz
jbrowse add-track output.sorted.gff.gz --out /path/to/jbrowse/instance
```
