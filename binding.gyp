{
  "targets": [
    {
      "target_name": "hello",
      "sources": [ "c++/hello.cc" ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    }
  ]
}