const gff = require('@gmod/gff').default

const fs = require('fs')

// parse a file from a file name
// parses only features and sequences by default,
// set options to parse directives and/or comments
fs.createReadStream(process.argv[2])
  .pipe(gff.parseStream({ parseAll: true }))
  .on('data', data => {
    if (data.directive) {
      // console.log('got a directive', data)
    } else if (data.comment) {
      // console.log('got a comment', data)
    } else if (data.sequence) {
      // console.log('got a sequence from a FASTA section')
    } else {
      if (data[0].type === 'gene') {
        data[0].child_features.forEach(f => {
          delete f[0].attributes.Parent
          process.stdout.write(gff.formatSync(f))
        })
      } else {
        process.stdout.write(gff.formatSync(data))
      }
    }
  })
