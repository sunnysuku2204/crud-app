kind: Deployment
apiVersion: apps/v1
metadata:
  annotations:
    deployment.kubernetes.io/revision: '1'
  resourceVersion: '401869513'
  name: workspace19bc4d754fcd4991
  uid: 3771cc35-1938-4cbc-bf9b-15174cd54991
  creationTimestamp: '2025-03-14T20:56:19Z'
  generation: 1
  managedFields:
    - manager: devworkspace-controller
      operation: Update
      apiVersion: apps/v1
      time: '2025-03-14T20:56:19Z'
      fieldsType: FieldsV1
      fieldsV1:
        'f:metadata':
          'f:labels':
            .: {}
            'f:controller.devfile.io/creator': {}
            'f:controller.devfile.io/devworkspace_id': {}
            'f:controller.devfile.io/devworkspace_name': {}
          'f:ownerReferences':
            .: {}
            'k:{"uid":"19bc4d75-4fcd-4991-8830-6db7e28e9f79"}': {}
        'f:spec':
          'f:progressDeadlineSeconds': {}
          'f:replicas': {}
          'f:revisionHistoryLimit': {}
          'f:selector': {}
          'f:strategy':
            'f:type': {}
          'f:template':
            'f:metadata':
              'f:labels':
                .: {}
                'f:controller.devfile.io/creator': {}
                'f:controller.devfile.io/devworkspace_id': {}
                'f:controller.devfile.io/devworkspace_name': {}
              'f:name': {}
              'f:namespace': {}
            'f:spec':
              'f:volumes':
                'k:{"name":"che-trusted-ca-certs"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                  'f:name': {}
                'k:{"name":"che-gateway"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                  'f:name': {}
                'k:{"name":"workspace-metadata"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                    'f:optional': {}
                  'f:name': {}
                'k:{"name":"devworkspace-gitconfig"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                  'f:name': {}
                'k:{"name":"ca-certs-merged"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                  'f:name': {}
                'k:{"name":"user-profile"}':
                  .: {}
                  'f:name': {}
                  'f:secret':
                    .: {}
                    'f:defaultMode': {}
                    'f:secretName': {}
                .: {}
                'k:{"name":"claim-devworkspace"}':
                  .: {}
                  'f:name': {}
                  'f:persistentVolumeClaim':
                    .: {}
                    'f:claimName': {}
                'k:{"name":"ssh-askpass"}':
                  .: {}
                  'f:configMap':
                    .: {}
                    'f:defaultMode': {}
                    'f:name': {}
                  'f:name': {}
                'k:{"name":"devworkspace-merged-git-credentials"}':
                  .: {}
                  'f:name': {}
                  'f:secret':
                    .: {}
                    'f:defaultMode': {}
                    'f:secretName': {}
              'f:containers':
                'k:{"name":"che-gateway"}':
                  'f:image': {}
                  'f:volumeMounts':
                    .: {}
                    'k:{"mountPath":"/.ssh-askpass/ssh-askpass.sh"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/devworkspace-metadata"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/etc/traefik"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                  'f:terminationMessagePolicy': {}
                  .: {}
                  'f:resources':
                    .: {}
                    'f:limits':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                    'f:requests':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                  'f:securityContext':
                    .: {}
                    'f:allowPrivilegeEscalation': {}
                    'f:capabilities':
                      .: {}
                      'f:add': {}
                      'f:drop': {}
                    'f:readOnlyRootFilesystem': {}
                    'f:runAsNonRoot': {}
                  'f:terminationMessagePath': {}
                  'f:imagePullPolicy': {}
                  'f:name': {}
                'k:{"name":"devworkspace-telemetry-amplitude-plugin"}':
                  'f:envFrom': {}
                  'f:image': {}
                  'f:volumeMounts':
                    'k:{"mountPath":"/config/user/profile"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/projects"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.ssh-askpass/ssh-askpass.sh"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/etc/gitconfig"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.git-credentials/"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/devworkspace-metadata"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    .: {}
                    'k:{"mountPath":"/public-certs"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                  'f:terminationMessagePolicy': {}
                  .: {}
                  'f:resources':
                    .: {}
                    'f:limits':
                      .: {}
                      'f:memory': {}
                    'f:requests':
                      .: {}
                      'f:memory': {}
                  'f:env':
                    'k:{"name":"DEVWORKSPACE_METADATA"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAMESPACE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_TELEMETRY_BACKEND_PORT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"SEGMENT_WRITE_KEY_ENDPOINT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECT_SOURCE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"SSH_ASKPASS"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_IDLE_TIMEOUT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ID"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    .: {}
                    'k:{"name":"DEVWORKSPACE_CREATOR"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ORIGINAL_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DISPLAY"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECTS_ROOT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_FLATTENED_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_COMPONENT_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                  'f:securityContext':
                    .: {}
                    'f:allowPrivilegeEscalation': {}
                    'f:capabilities':
                      .: {}
                      'f:add': {}
                      'f:drop': {}
                    'f:readOnlyRootFilesystem': {}
                    'f:runAsNonRoot': {}
                  'f:terminationMessagePath': {}
                  'f:imagePullPolicy': {}
                  'f:name': {}
                'k:{"name":"runtime"}':
                  'f:envFrom': {}
                  'f:image': {}
                  'f:volumeMounts':
                    'k:{"mountPath":"/config/user/profile"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/projects"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.ssh-askpass/ssh-askpass.sh"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/etc/gitconfig"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.git-credentials/"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/devworkspace-metadata"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    .: {}
                    'k:{"mountPath":"/public-certs"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/checode"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                  'f:terminationMessagePolicy': {}
                  .: {}
                  'f:resources':
                    .: {}
                    'f:limits':
                      .: {}
                      'f:memory': {}
                    'f:requests':
                      .: {}
                      'f:memory': {}
                  'f:args': {}
                  'f:lifecycle':
                    .: {}
                    'f:postStart':
                      .: {}
                      'f:exec':
                        .: {}
                        'f:command': {}
                  'f:env':
                    'k:{"name":"DEVWORKSPACE_METADATA"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAMESPACE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_TELEMETRY_BACKEND_PORT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECT_SOURCE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"SSH_ASKPASS"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_PLUGIN_REGISTRY_INTERNAL_URL"}':
                      .: {}
                      'f:name': {}
                    'k:{"name":"DEVWORKSPACE_IDLE_TIMEOUT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_PLUGIN_REGISTRY_URL"}':
                      .: {}
                      'f:name': {}
                    'k:{"name":"DEVWORKSPACE_ID"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    .: {}
                    'k:{"name":"DEBUG_PORT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_CREATOR"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ORIGINAL_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DISPLAY"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CLUSTER_CONSOLE_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_DASHBOARD_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECTS_ROOT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_FLATTENED_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CLUSTER_CONSOLE_TITLE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_COMPONENT_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"OPENVSX_REGISTRY_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                  'f:securityContext':
                    .: {}
                    'f:allowPrivilegeEscalation': {}
                    'f:capabilities':
                      .: {}
                      'f:add': {}
                      'f:drop': {}
                    'f:readOnlyRootFilesystem': {}
                    'f:runAsNonRoot': {}
                  'f:terminationMessagePath': {}
                  'f:imagePullPolicy': {}
                  'f:ports':
                    .: {}
                    'k:{"containerPort":3000,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                    'k:{"containerPort":3100,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                    'k:{"containerPort":5858,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                    'k:{"containerPort":13131,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                    'k:{"containerPort":13132,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                    'k:{"containerPort":13133,"protocol":"TCP"}':
                      .: {}
                      'f:containerPort': {}
                      'f:name': {}
                      'f:protocol': {}
                  'f:name': {}
              'f:dnsPolicy': {}
              'f:serviceAccount': {}
              'f:restartPolicy': {}
              'f:schedulerName': {}
              'f:terminationGracePeriodSeconds': {}
              'f:initContainers':
                .: {}
                'k:{"name":"che-code-injector"}':
                  'f:envFrom': {}
                  'f:image': {}
                  'f:volumeMounts':
                    'k:{"mountPath":"/config/user/profile"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/projects"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.ssh-askpass/ssh-askpass.sh"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/etc/gitconfig"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.git-credentials/"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/devworkspace-metadata"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    .: {}
                    'k:{"mountPath":"/public-certs"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/tmp/workspace-storage"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/checode"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                  'f:terminationMessagePolicy': {}
                  .: {}
                  'f:resources':
                    .: {}
                    'f:limits':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                    'f:requests':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                  'f:command': {}
                  'f:env':
                    'k:{"name":"DEVWORKSPACE_METADATA"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAMESPACE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_TELEMETRY_BACKEND_PORT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECT_SOURCE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"SSH_ASKPASS"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_PLUGIN_REGISTRY_INTERNAL_URL"}':
                      .: {}
                      'f:name': {}
                    'k:{"name":"DEVWORKSPACE_IDLE_TIMEOUT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_PLUGIN_REGISTRY_URL"}':
                      .: {}
                      'f:name': {}
                    'k:{"name":"DEVWORKSPACE_ID"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    .: {}
                    'k:{"name":"DEVWORKSPACE_CREATOR"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ORIGINAL_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DISPLAY"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CLUSTER_CONSOLE_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CHE_DASHBOARD_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECTS_ROOT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_FLATTENED_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"CLUSTER_CONSOLE_TITLE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_COMPONENT_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"OPENVSX_REGISTRY_URL"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                  'f:securityContext':
                    .: {}
                    'f:allowPrivilegeEscalation': {}
                    'f:capabilities':
                      .: {}
                      'f:add': {}
                      'f:drop': {}
                    'f:readOnlyRootFilesystem': {}
                    'f:runAsNonRoot': {}
                  'f:terminationMessagePath': {}
                  'f:imagePullPolicy': {}
                  'f:name': {}
                'k:{"name":"project-clone"}':
                  'f:envFrom': {}
                  'f:image': {}
                  'f:volumeMounts':
                    'k:{"mountPath":"/config/user/profile"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/projects"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.ssh-askpass/ssh-askpass.sh"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/etc/gitconfig"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                      'f:subPath': {}
                    'k:{"mountPath":"/.git-credentials/"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    'k:{"mountPath":"/devworkspace-metadata"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                    .: {}
                    'k:{"mountPath":"/public-certs"}':
                      .: {}
                      'f:mountPath': {}
                      'f:name': {}
                      'f:readOnly': {}
                  'f:terminationMessagePolicy': {}
                  .: {}
                  'f:resources':
                    .: {}
                    'f:limits':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                    'f:requests':
                      .: {}
                      'f:cpu': {}
                      'f:memory': {}
                  'f:env':
                    'k:{"name":"DEVWORKSPACE_METADATA"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAMESPACE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"SSH_ASKPASS"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_IDLE_TIMEOUT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ID"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    .: {}
                    'k:{"name":"DEVWORKSPACE_CREATOR"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_ORIGINAL_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DISPLAY"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"PROJECTS_ROOT"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_FLATTENED_DEVFILE"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                    'k:{"name":"DEVWORKSPACE_NAME"}':
                      .: {}
                      'f:name': {}
                      'f:value': {}
                  'f:terminationMessagePath': {}
                  'f:imagePullPolicy': {}
                  'f:name': {}
              'f:imagePullSecrets':
                .: {}
                'k:{"name":"workspace19bc4d754fcd4991-sa-dockercfg-cbk68"}': {}
              'f:serviceAccountName': {}
              'f:securityContext': {}
    - manager: kube-controller-manager
      operation: Update
      apiVersion: apps/v1
      time: '2025-03-14T20:56:19Z'
      fieldsType: FieldsV1
      fieldsV1:
        'f:metadata':
          'f:annotations':
            .: {}
            'f:deployment.kubernetes.io/revision': {}
        'f:status':
          'f:conditions':
            .: {}
            'k:{"type":"Available"}':
              .: {}
              'f:lastTransitionTime': {}
              'f:lastUpdateTime': {}
              'f:message': {}
              'f:reason': {}
              'f:status': {}
              'f:type': {}
            'k:{"type":"Progressing"}':
              .: {}
              'f:lastTransitionTime': {}
              'f:lastUpdateTime': {}
              'f:message': {}
              'f:reason': {}
              'f:status': {}
              'f:type': {}
          'f:observedGeneration': {}
          'f:replicas': {}
          'f:unavailableReplicas': {}
          'f:updatedReplicas': {}
      subresource: status
  namespace: sunredhat22-dev
  ownerReferences:
    - apiVersion: workspace.devfile.io/v1alpha2
      kind: DevWorkspace
      name: nodejs
      uid: 19bc4d75-4fcd-4991-8830-6db7e28e9f79
      controller: true
      blockOwnerDeletion: true
  labels:
    controller.devfile.io/creator: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
    controller.devfile.io/devworkspace_id: workspace19bc4d754fcd4991
    controller.devfile.io/devworkspace_name: nodejs
spec:
  replicas: 1
  selector:
    matchLabels:
      controller.devfile.io/devworkspace_id: workspace19bc4d754fcd4991
  template:
    metadata:
      name: workspace19bc4d754fcd4991
      namespace: sunredhat22-dev
      creationTimestamp: null
      labels:
        controller.devfile.io/creator: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
        controller.devfile.io/devworkspace_id: workspace19bc4d754fcd4991
        controller.devfile.io/devworkspace_name: nodejs
    spec:
      restartPolicy: Always
      initContainers:
        - resources:
            limits:
              cpu: 500m
              memory: 256Mi
            requests:
              cpu: 30m
              memory: 32Mi
          terminationMessagePath: /dev/termination-log
          name: che-code-injector
          command:
            - /entrypoint-init-container.sh
          env:
            - name: PROJECTS_ROOT
              value: /projects
            - name: PROJECT_SOURCE
              value: /projects/devfile-sample
            - name: DEVWORKSPACE_COMPONENT_NAME
              value: che-code-injector
            - name: CHE_DASHBOARD_URL
              value: 'https://devspaces.apps.rm1.0a51.p1.openshiftapps.com'
            - name: CHE_PLUGIN_REGISTRY_URL
            - name: CHE_PLUGIN_REGISTRY_INTERNAL_URL
            - name: CLUSTER_CONSOLE_URL
              value: >-
                https://console-openshift-console.apps.rm1.0a51.p1.openshiftapps.com
            - name: CLUSTER_CONSOLE_TITLE
              value: OpenShift console
            - name: OPENVSX_REGISTRY_URL
              value: 'https://open-vsx.org'
            - name: DEVWORKSPACE_NAMESPACE
              value: sunredhat22-dev
            - name: DEVWORKSPACE_NAME
              value: nodejs
            - name: DEVWORKSPACE_ID
              value: workspace19bc4d754fcd4991
            - name: DEVWORKSPACE_CREATOR
              value: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
            - name: DEVWORKSPACE_IDLE_TIMEOUT
              value: 15m
            - name: SSH_ASKPASS
              value: /.ssh-askpass/ssh-askpass.sh
            - name: DISPLAY
              value: ':0'
            - name: DEVWORKSPACE_TELEMETRY_BACKEND_PORT
              value: '4167'
            - name: DEVWORKSPACE_METADATA
              value: /devworkspace-metadata
            - name: DEVWORKSPACE_FLATTENED_DEVFILE
              value: /devworkspace-metadata/flattened.devworkspace.yaml
            - name: DEVWORKSPACE_ORIGINAL_DEVFILE
              value: /devworkspace-metadata/original.devworkspace.yaml
          securityContext:
            capabilities:
              add:
                - SETGID
                - SETUID
              drop:
                - ALL
            runAsNonRoot: true
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: true
          imagePullPolicy: Always
          volumeMounts:
            - name: claim-devworkspace
              mountPath: /tmp/workspace-storage
              subPath: workspace19bc4d754fcd4991
            - name: claim-devworkspace
              mountPath: /checode
              subPath: workspace19bc4d754fcd4991/checode
            - name: claim-devworkspace
              mountPath: /projects
              subPath: workspace19bc4d754fcd4991/projects
            - name: devworkspace-merged-git-credentials
              readOnly: true
              mountPath: /.git-credentials/
            - name: devworkspace-gitconfig
              readOnly: true
              mountPath: /etc/gitconfig
              subPath: gitconfig
            - name: che-trusted-ca-certs
              readOnly: true
              mountPath: /public-certs
            - name: ca-certs-merged
              readOnly: true
              mountPath: /etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem
              subPath: tls-ca-bundle.pem
            - name: user-profile
              readOnly: true
              mountPath: /config/user/profile
            - name: ssh-askpass
              readOnly: true
              mountPath: /.ssh-askpass/ssh-askpass.sh
              subPath: ssh-askpass.sh
            - name: workspace-metadata
              readOnly: true
              mountPath: /devworkspace-metadata
          terminationMessagePolicy: File
          envFrom:
            - configMapRef:
                name: che-idle-settings
          image: >-
            registry.redhat.io/devspaces/code-rhel9@sha256:f6ddbdbd80cd0905f5238cb26f53d1bde5b006fcf45e5017af0152d255ef2427
        - resources:
            limits:
              cpu: '1'
              memory: 1Gi
            requests:
              cpu: 100m
              memory: 128Mi
          terminationMessagePath: /dev/termination-log
          name: project-clone
          env:
            - name: DEVWORKSPACE_NAMESPACE
              value: sunredhat22-dev
            - name: DEVWORKSPACE_NAME
              value: nodejs
            - name: DEVWORKSPACE_ID
              value: workspace19bc4d754fcd4991
            - name: DEVWORKSPACE_CREATOR
              value: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
            - name: DEVWORKSPACE_IDLE_TIMEOUT
              value: 15m
            - name: SSH_ASKPASS
              value: /.ssh-askpass/ssh-askpass.sh
            - name: DISPLAY
              value: ':0'
            - name: PROJECTS_ROOT
              value: /projects
            - name: DEVWORKSPACE_METADATA
              value: /devworkspace-metadata
            - name: DEVWORKSPACE_FLATTENED_DEVFILE
              value: /devworkspace-metadata/flattened.devworkspace.yaml
            - name: DEVWORKSPACE_ORIGINAL_DEVFILE
              value: /devworkspace-metadata/original.devworkspace.yaml
          imagePullPolicy: Always
          volumeMounts:
            - name: claim-devworkspace
              mountPath: /projects
              subPath: workspace19bc4d754fcd4991/projects
            - name: devworkspace-merged-git-credentials
              readOnly: true
              mountPath: /.git-credentials/
            - name: devworkspace-gitconfig
              readOnly: true
              mountPath: /etc/gitconfig
              subPath: gitconfig
            - name: che-trusted-ca-certs
              readOnly: true
              mountPath: /public-certs
            - name: ca-certs-merged
              readOnly: true
              mountPath: /etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem
              subPath: tls-ca-bundle.pem
            - name: user-profile
              readOnly: true
              mountPath: /config/user/profile
            - name: ssh-askpass
              readOnly: true
              mountPath: /.ssh-askpass/ssh-askpass.sh
              subPath: ssh-askpass.sh
            - name: workspace-metadata
              readOnly: true
              mountPath: /devworkspace-metadata
          terminationMessagePolicy: File
          envFrom:
            - configMapRef:
                name: che-idle-settings
          image: 'quay.io/devfile/project-clone:v0.32.1'
      serviceAccountName: workspace19bc4d754fcd4991-sa
      imagePullSecrets:
        - name: workspace19bc4d754fcd4991-sa-dockercfg-cbk68
      schedulerName: default-scheduler
      terminationGracePeriodSeconds: 10
      securityContext: {}
      containers:
        - resources:
            limits:
              memory: 2Gi
            requests:
              memory: 320Mi
          terminationMessagePath: /dev/termination-log
          lifecycle:
            postStart:
              exec:
                command:
                  - /bin/sh
                  - '-c'
                  - >
                    {

                    nohup /checode/entrypoint-volume.sh >
                    /checode/entrypoint-logs.txt 2>&1 &

                    } 1>/tmp/poststart-stdout.txt 2>/tmp/poststart-stderr.txt
          name: runtime
          env:
            - name: PROJECTS_ROOT
              value: /projects
            - name: PROJECT_SOURCE
              value: /projects/devfile-sample
            - name: DEVWORKSPACE_COMPONENT_NAME
              value: runtime
            - name: CHE_DASHBOARD_URL
              value: 'https://devspaces.apps.rm1.0a51.p1.openshiftapps.com'
            - name: CHE_PLUGIN_REGISTRY_URL
            - name: CHE_PLUGIN_REGISTRY_INTERNAL_URL
            - name: CLUSTER_CONSOLE_URL
              value: >-
                https://console-openshift-console.apps.rm1.0a51.p1.openshiftapps.com
            - name: CLUSTER_CONSOLE_TITLE
              value: OpenShift console
            - name: OPENVSX_REGISTRY_URL
              value: 'https://open-vsx.org'
            - name: DEBUG_PORT
              value: '5858'
            - name: DEVWORKSPACE_NAMESPACE
              value: sunredhat22-dev
            - name: DEVWORKSPACE_NAME
              value: nodejs
            - name: DEVWORKSPACE_ID
              value: workspace19bc4d754fcd4991
            - name: DEVWORKSPACE_CREATOR
              value: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
            - name: DEVWORKSPACE_IDLE_TIMEOUT
              value: 15m
            - name: SSH_ASKPASS
              value: /.ssh-askpass/ssh-askpass.sh
            - name: DISPLAY
              value: ':0'
            - name: DEVWORKSPACE_TELEMETRY_BACKEND_PORT
              value: '4167'
            - name: DEVWORKSPACE_METADATA
              value: /devworkspace-metadata
            - name: DEVWORKSPACE_FLATTENED_DEVFILE
              value: /devworkspace-metadata/flattened.devworkspace.yaml
            - name: DEVWORKSPACE_ORIGINAL_DEVFILE
              value: /devworkspace-metadata/original.devworkspace.yaml
          securityContext:
            capabilities:
              add:
                - SETGID
                - SETUID
              drop:
                - ALL
            runAsNonRoot: true
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: true
          ports:
            - name: che-code
              containerPort: 3100
              protocol: TCP
            - name: code-redirect-1
              containerPort: 13131
              protocol: TCP
            - name: code-redirect-2
              containerPort: 13132
              protocol: TCP
            - name: code-redirect-3
              containerPort: 13133
              protocol: TCP
            - name: https-node
              containerPort: 3000
              protocol: TCP
            - name: debug
              containerPort: 5858
              protocol: TCP
          imagePullPolicy: Always
          volumeMounts:
            - name: claim-devworkspace
              mountPath: /checode
              subPath: workspace19bc4d754fcd4991/checode
            - name: claim-devworkspace
              mountPath: /projects
              subPath: workspace19bc4d754fcd4991/projects
            - name: devworkspace-merged-git-credentials
              readOnly: true
              mountPath: /.git-credentials/
            - name: devworkspace-gitconfig
              readOnly: true
              mountPath: /etc/gitconfig
              subPath: gitconfig
            - name: che-trusted-ca-certs
              readOnly: true
              mountPath: /public-certs
            - name: ca-certs-merged
              readOnly: true
              mountPath: /etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem
              subPath: tls-ca-bundle.pem
            - name: user-profile
              readOnly: true
              mountPath: /config/user/profile
            - name: ssh-askpass
              readOnly: true
              mountPath: /.ssh-askpass/ssh-askpass.sh
              subPath: ssh-askpass.sh
            - name: workspace-metadata
              readOnly: true
              mountPath: /devworkspace-metadata
          terminationMessagePolicy: File
          envFrom:
            - configMapRef:
                name: che-idle-settings
          image: 'registry.access.redhat.com/ubi8/nodejs-18:1-32'
          args:
            - tail
            - '-f'
            - /dev/null
        - resources:
            limits:
              memory: 128Mi
            requests:
              memory: 64Mi
          terminationMessagePath: /dev/termination-log
          name: devworkspace-telemetry-amplitude-plugin
          env:
            - name: PROJECTS_ROOT
              value: /projects
            - name: PROJECT_SOURCE
              value: /projects/devfile-sample
            - name: DEVWORKSPACE_COMPONENT_NAME
              value: devworkspace-telemetry-amplitude-plugin
            - name: SEGMENT_WRITE_KEY_ENDPOINT
              value: >-
                https://registration-service-toolchain-host-operator.apps.sandbox.x8i5.p1.openshiftapps.com/api/v1/segment-write-key
            - name: DEVWORKSPACE_NAMESPACE
              value: sunredhat22-dev
            - name: DEVWORKSPACE_NAME
              value: nodejs
            - name: DEVWORKSPACE_ID
              value: workspace19bc4d754fcd4991
            - name: DEVWORKSPACE_CREATOR
              value: 7c26b94a-391e-433a-bc4f-b9478b27b8b7
            - name: DEVWORKSPACE_IDLE_TIMEOUT
              value: 15m
            - name: SSH_ASKPASS
              value: /.ssh-askpass/ssh-askpass.sh
            - name: DISPLAY
              value: ':0'
            - name: DEVWORKSPACE_TELEMETRY_BACKEND_PORT
              value: '4167'
            - name: DEVWORKSPACE_METADATA
              value: /devworkspace-metadata
            - name: DEVWORKSPACE_FLATTENED_DEVFILE
              value: /devworkspace-metadata/flattened.devworkspace.yaml
            - name: DEVWORKSPACE_ORIGINAL_DEVFILE
              value: /devworkspace-metadata/original.devworkspace.yaml
          securityContext:
            capabilities:
              add:
                - SETGID
                - SETUID
              drop:
                - ALL
            runAsNonRoot: true
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: true
          imagePullPolicy: Always
          volumeMounts:
            - name: claim-devworkspace
              mountPath: /projects
              subPath: workspace19bc4d754fcd4991/projects
            - name: devworkspace-merged-git-credentials
              readOnly: true
              mountPath: /.git-credentials/
            - name: devworkspace-gitconfig
              readOnly: true
              mountPath: /etc/gitconfig
              subPath: gitconfig
            - name: che-trusted-ca-certs
              readOnly: true
              mountPath: /public-certs
            - name: ca-certs-merged
              readOnly: true
              mountPath: /etc/pki/ca-trust/extracted/pem/tls-ca-bundle.pem
              subPath: tls-ca-bundle.pem
            - name: user-profile
              readOnly: true
              mountPath: /config/user/profile
            - name: ssh-askpass
              readOnly: true
              mountPath: /.ssh-askpass/ssh-askpass.sh
              subPath: ssh-askpass.sh
            - name: workspace-metadata
              readOnly: true
              mountPath: /devworkspace-metadata
          terminationMessagePolicy: File
          envFrom:
            - configMapRef:
                name: che-idle-settings
          image: 'quay.io/eclipse/devworkspace-telemetry-amplitude-plugin:644a6b3'
        - name: che-gateway
          image: >-
            registry.redhat.io/devspaces/traefik-rhel9@sha256:b1a8a9e44e86795051b3d45366c69d4fcc9c6dab99282088891690df412c8112
          resources:
            limits:
              cpu: 500m
              memory: 256Mi
            requests:
              cpu: 50m
              memory: 64Mi
          volumeMounts:
            - name: che-gateway
              mountPath: /etc/traefik
            - name: ssh-askpass
              readOnly: true
              mountPath: /.ssh-askpass/ssh-askpass.sh
              subPath: ssh-askpass.sh
            - name: workspace-metadata
              readOnly: true
              mountPath: /devworkspace-metadata
          terminationMessagePath: /dev/termination-log
          terminationMessagePolicy: File
          imagePullPolicy: IfNotPresent
          securityContext:
            capabilities:
              add:
                - SETGID
                - SETUID
              drop:
                - ALL
            runAsNonRoot: true
            readOnlyRootFilesystem: false
            allowPrivilegeEscalation: true
      serviceAccount: workspace19bc4d754fcd4991-sa
      volumes:
        - name: ssh-askpass
          configMap:
            name: devworkspace-ssh-askpass
            defaultMode: 493
        - name: devworkspace-merged-git-credentials
          secret:
            secretName: devworkspace-merged-git-credentials
            defaultMode: 416
        - name: devworkspace-gitconfig
          configMap:
            name: devworkspace-gitconfig
            defaultMode: 416
        - name: che-trusted-ca-certs
          configMap:
            name: che-trusted-ca-certs
            defaultMode: 416
        - name: ca-certs-merged
          configMap:
            name: ca-certs-merged
            defaultMode: 416
        - name: user-profile
          secret:
            secretName: user-profile
            defaultMode: 416
        - name: claim-devworkspace
          persistentVolumeClaim:
            claimName: claim-devworkspace
        - name: workspace-metadata
          configMap:
            name: workspace19bc4d754fcd4991-metadata
            defaultMode: 420
            optional: true
        - name: che-gateway
          configMap:
            name: workspace19bc4d754fcd4991-route
            defaultMode: 420
      dnsPolicy: ClusterFirst
  strategy:
    type: Recreate
  revisionHistoryLimit: 10
  progressDeadlineSeconds: 600
status:
  observedGeneration: 1
  replicas: 1
  updatedReplicas: 1
  unavailableReplicas: 1
  conditions:
    - type: Available
      status: 'False'
      lastUpdateTime: '2025-03-14T20:56:19Z'
      lastTransitionTime: '2025-03-14T20:56:19Z'
      reason: MinimumReplicasUnavailable
      message: Deployment does not have minimum availability.
    - type: Progressing
      status: 'True'
      lastUpdateTime: '2025-03-14T20:56:19Z'
      lastTransitionTime: '2025-03-14T20:56:19Z'
      reason: ReplicaSetUpdated
      message: ReplicaSet "workspace19bc4d754fcd4991-7c77fc9d5" is progressing.
